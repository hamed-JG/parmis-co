import React from "react";
import Card from "../../../Shared/blogCard/Card";
import LoadingSpinner from "../../../Shared/Tools/LoadingSpinner";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO_HOME } from "../../../../graphql/queries";

const styles = {
    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap',
    
}

function Cards() {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO_HOME);

  if (loading) return <LoadingSpinner />;

  if (errors) return <h2>error...</h2>;

  return (
    <div style={{...styles}}>
      {data.posts.map((post) => (
        <Card {...post} key={post.id} />
      ))}
    </div>
  );
}

export default Cards;
