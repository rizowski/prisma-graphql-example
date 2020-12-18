module.exports = {
  Query: {
    users: async (parent, args, context) => {
      return await context.prisma.user.findMany();
    },
    posts: async (parent, args, context) => {
      return await context.prisma.post.findMany();
    },
  },
  Mutation: {
    async createUser(parent, { input }, context) {
      return await context.prisma.user.create({
        data: {
          email: input.email,
          name: input.name,
          role: input.role,
        },
      });
    },

    async updateUser(parent, { input }, context) {
      const { id, ...data } = input;

      return await context.prisma.user.update({
        where: {
          id,
        },
        data,
      });
    },

    async createPost(parent, { input }, context) {
      return await context.prisma.post.create({
        data: {
          title: input.title,
          author: {
            connect: { id: input.authorId },
          },
          published: input.published,
        },
      });
    },
  },
  User: {
    posts: (parent, { input }, context) => {
      return context.prisma.post.findMany({
        where: {
          author: {
            id: parent.id,
          },
        },
      });
    },
  },
  Post: {
    author: (parent, args, context) => {
      return context.prisma.user.findUnique({
        where: {
          id: parent.authorId,
        },
      });
    },
  },
};
