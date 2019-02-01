const parkjong = {
  name: "parkjong",
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => parkjong
  }
};

export default resolvers;
