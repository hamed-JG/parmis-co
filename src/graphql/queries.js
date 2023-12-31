import { gql } from "@apollo/client";
const GET_BLOGS_INFO = gql`
  query {
    posts(first: 100) {
      author {
        name
        field
        avatar {
          url
        }
      }
      slug
      title
      id
      datePublished
      coverPhoto {
        url
      }
    }
  }
`;
const GET_BLOGS_INFO_HOME = gql`
  query {
    posts(first: 3) {
      author {
        name
        field
        avatar {
          url
        }
      }
      slug
      title
      id
      datePublished
      coverPhoto {
        url
      }
    }
  }
`;
const GET_POST_INFO = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        name
        field
      }
      content {
        html
      }
      title
      coverPhoto {
        url
      }
    }
  }
`;

const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      text
    }
  }
`;

const GET_GALLERY_PHOTO = gql`
  query getPhotos {
    galleries(first: 98) {
      title
      slug
      photo {
        url
      }
    }
  }
`;
export {
  GET_BLOGS_INFO,
  GET_BLOGS_INFO_HOME,
  GET_POST_INFO,
  GET_POST_COMMENTS,
  GET_GALLERY_PHOTO,
};
