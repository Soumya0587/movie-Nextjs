
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Movies = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((el, i) => (
        <Link key={el.id} href={`/movies/${el.id}`}>
          <div
            key={el.id}
            style={{
              display: "grid",
              gap: "10px",
              gridTemplateColumns: "repeat(2,1fr)",
            }}
          >
            <div>
            <Image src="https://avatars.githubusercontent.com/u/40817224?v=4" alt="dfg" width={100} height={100} />
              <h3>{el.Title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:4004/movies");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default Movies;
