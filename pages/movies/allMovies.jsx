
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
              
              <h3>{el.Title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:4004/movies");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default Movies;
