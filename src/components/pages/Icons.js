import React from "react";
import * as Icon from "react-bootstrap-icons";
import {
  Iconswrapper,
  IconDiv,
  IconPic,
  Heading1,
  Container,
} from "../../Design/components";

const Icons = () => {
  return (
    <Container style={{ height: "100vh", padding: "30px" }}>
      <Heading1>Welcome To Our Icons Section</Heading1>
      <Iconswrapper>
        <IconDiv>
          <Icon.HouseAdd className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.MusicNoteList className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.Controller className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.ArrowsFullscreen className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.ArrowRepeat className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.HouseAdd className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.Back className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.Bag className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.BarChartLine className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.Bluetooth className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.Bookmark className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.BrowserEdge className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.Cart className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.Chat className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.Database className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.EmojiLaughing className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.EnvelopePaper className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.EyeSlash className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.FileEarmark className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.FilePlay className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.Globe className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.Google className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.HandThumbsUp className="me-2 common" />
        </IconDiv>
        <IconDiv>
          <Icon.Headphones className="me-2 common" />
        </IconDiv>
      </Iconswrapper>
    </Container>
  );
};

export default Icons;
