import styled from "styled-components/native";
import {cutText} from "../tools/cutText";

const PostView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: grey;
  border-bottom-style: solid;
`;
const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;
const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  margin-right: 15px;
`;
const PostText = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;
const PostDate = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
`;
//"https://memepedia.ru/wp-content/uploads/2023/09/sholc-mem-768x512.jpg"
export const Post = ({ text, imageUrl, date, author }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />
      <PostDetails>
        <PostText>{cutText(text, 55)}</PostText>
        <PostDate>{date}</PostDate>
        <PostDate>{`Author: ${author}`}</PostDate>
      </PostDetails>
    </PostView>
  );
};
