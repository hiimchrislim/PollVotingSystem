import React, { useState } from "react";
import { Button } from "../components/Button";
import { FormInput } from "../components/FormInput";
import { Header } from "../components/Header";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import { pollCodeCookie } from "../constants/constants";

export const JoinPoll = () => {
  const history = useHistory();
  const [pollCode, setPollCode] = useState("");
  const cookies = new Cookies();

  const joinPollRoomHandler = () => {
    // Check if the room exists here
    if (pollCode.length !== 0) {
      cookies.set(pollCodeCookie, pollCode, { path: "/" });
      history.push("/vote");
    }
  };

  return (
    <div className={"block text-center px-5"}>
      <Header text={"MCS PollVoting"} />
      <div className={"flex flex-col"}>
        <FormInput
          placeholder={"Poll Code"}
          onChangeHandler={(e) => setPollCode(e)}
          pollValue={pollCode}
        />
        <Button
          value={"Enter"}
          onClick={() => {
            joinPollRoomHandler();
          }}
        />
      </div>
    </div>
  );
};
