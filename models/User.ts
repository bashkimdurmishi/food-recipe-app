export default class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  favorites: number[];
  profileImageUrl: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    favorites: number[],
    profileImageUrl: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.favorites = favorites;
    this.profileImageUrl = profileImageUrl;
  }
}
