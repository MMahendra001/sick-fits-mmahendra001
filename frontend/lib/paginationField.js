import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // we want list baby , don't separate data with keys, let's me take care of it.

    read(existing = [], { args, cache }) {
      // console.log({ existing, args, cache });
      const { skip, first } = args;
      // Read cache for the data
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);

      // If there are items
      // AND not enough to satisfy to how many we requested per page
      // AND we are on the last page.
      // Then return the items.

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        // okay we don't have items in our cache so go and fetch it from network.
        return false;
      }

      // If there are items in our cache then return it and don't go to the network.

      if (items.length) {
        console.log(
          `There are ${items.length} items in cache! Gonna send them  to apollo.`
        );
        return items;
      }

      return false; // fallback to network

      // Do we have have the data already?look for it.
      // Two possibility:our data here is : allProduct 2 per page
      // 1. Data is there so return it.
      // 2. Data is !there so return false > go ahead and make a network request and get the data.
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // Now you came back from network with data ,how you want to put them ( take care of it :) ) ?
      console.log(`Merging items from network ${incoming.length}`);
      const merged = existing ? existing.slice(0) : [];
      // put the data in one list and leave empty spot for not requested data..null..
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      // console.log(merged);
      // read merge read
      // finally we returned the merged items from cache.
      return merged;
    },
  };
}
