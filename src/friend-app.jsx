import React, { useState, useEffect } from "react";
import { getFriendList } from "./services";
import Card from "./card";
import Modal from "./modal";

const FriendApp = () => {
  const [list, setList] = useState([]);
  const [cardObj, setCardObj] = useState({});
  const [currPage, setCurrPage] = useState(1);
  const [results, setResults] = useState(25);
  const [errors, setErrors] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const alertMsg = "Number is out of range";
  const pageLimit = {
    min: 0,
    max: 500,
  };

  useEffect(() => {
    getListing({ page: currPage, results: results });
  }, []);

  useEffect(() => {
    if (checkRange(currPage)) getListing({ page: currPage, results: results });
    else setErrors("Number is out or range");
  }, [currPage]);

  const getListing = (param) => {
    getFriendList(param).then((res) => {
      if (res.results) setList([...res.results]);
    });
  };

  const changePage = (num) => {
    if (checkRange(currPage + num)) setCurrPage((page) => page + num);
    else alert(alertMsg);
  };

  const checkRange = (value) => {
    if (value >= pageLimit.min && value <= pageLimit.max) {
      return true;
    }
    return false;
  };

  const onChangeText = ({ target: input }) => {
    const toNumber = parseInt(input.value === "" ? 0 : input.value);
    if (!isNaN(toNumber)) {
      if (checkRange(toNumber)) setCurrPage(toNumber);
      else alert(alertMsg);
    }
  };

  const onClickCard = (item) => {
    setCardObj({ ...item });
    setOpenDialog(true);
    console.log("data", item);
  };
  return (
    // <div style={{ width: "76%" }}>
    <React.Fragment>
      <div
        style={{
          width: "76%",
          height: "80vh",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <Card listing={list} onClick={onClickCard} />
      </div>
      <div>
        <button
          style={{ margin: "0px 5px" }}
          onClick={() => changePage(-1)}
          disabled={currPage <= pageLimit.min ? true : false}
        >
          {"<"}
        </button>
        <input
          style={{ width: 70, margin: "0px 5px", textAlign: "center" }}
          onChange={(e) => onChangeText(e)}
          value={currPage}
        />
        <button
          style={{ margin: "0px 5px" }}
          onClick={() => changePage(1)}
          disabled={currPage >= pageLimit.max ? true : false}
        >
          {">"}
        </button>
      </div>
      <Modal
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        item={cardObj}
      />
    </React.Fragment>
    // </div>
  );
};

export default FriendApp;
