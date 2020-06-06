import React, { useEffect, useState } from "react";
import axiosInstance from "../API/axiosInstance";
import SimplePopover from "./Popup";

function PostLikes(props) {
  const { id, type, noOfLikes } = props;
  const [likes, setLikes] = useState([]);
  const [num, setNum] = useState(1);
  const [finalPage, setFinalPage] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const handleScroll = (e) => {
    console.log(e.target.scrollTop);
    if (num <= Math.floor(e.target.scrollTop / 270) && num < finalPage)
      setNum(num + 1);
  };

  const getData = async () => {
    try {
      const likesData = await axiosInstance.get(
        `api/${type}/${id}/likes?page=${num}`
      );
      console.log(likesData);
      setLikes([...likes, ...likesData.data]);
      setLoaded(true);
      setFinalPage(likesData.last_page);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [num]);
  return (
    <>
      <SimplePopover
        content={loaded ? likes : false}
        scroll={handleScroll}
        noOfLikes={noOfLikes}
      />
    </>
  );
}

export default PostLikes;