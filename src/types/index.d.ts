import * as FirebaseAuth from "firebase/auth";

export interface IAuth extends FirebaseAuth.User {}

export type SignUpType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type SignInType = {
  email: string;
  password: string;
};

export type UserType = {
  uid: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  userName: string | any;
  email: string | null;
  photoURL: string | null;
  followers: [User] | [];
  following: [User] | [];
  bio: string;
  website: string;
};

export type FieldType = {
  id: string;
  type: string;
  name: string;
  label: string;
  placeholder?: string;
};

export type EditUserType = {
  bio?: string;
  website?: string;
  userName?: string;
};

export type PostType = {
  text: string;
  imageURL?: any;
  imgAltText?: string;
};
