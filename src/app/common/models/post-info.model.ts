import { CommentModel } from './comment.model';

export interface PostInfoModel {
  id: number;
  userInfo: UserInfoModel;
  content: PostContentModel;
  timestamp: TimestampModel;
  likes: number;
  comments: Array<CommentModel>;
}

interface UserInfoModel {
  name: string;
  username: string;
  avatar: string;
}

interface PostContentModel {
  img?: string;
  text: string;
}

interface TimestampModel {
  date: string;
  time: string;
}
