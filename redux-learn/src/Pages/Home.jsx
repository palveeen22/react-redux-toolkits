import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "../Store/FetchSlice";

const Home = () => {
  const { posts, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);
  return (
    <section className="w-full">
      <div className="grid grid-cols-4 gap-4">
        {posts?.slice(0, 10).map((e) => {
          return (
            <div className="w-56 h-56 border">
              <h1 className="text-sm">{e?.title}</h1>
              <h1 className="text-xs">{e?.body}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
