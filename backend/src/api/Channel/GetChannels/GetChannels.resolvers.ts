import { Resolvers } from "src/types/resolvers";
import { GetChannelsResponse } from "../../../types/graphql";
import Channel from "../../../../src/entities/Channel";

const resolvers: Resolvers = {
  Query: {
    GetChannels: async (_, __): Promise<GetChannelsResponse> => {
      try {
        const channels = await Channel.find();

        if (!channels) {
          return {
            ok: true,
            error: "존재하는 채널이 없습니다.",
            channels: null
          };
        }

        return {
          ok: true,
          error: null,
          channels
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          channels: null
        };
      }
    }
  }
};

export default resolvers;
