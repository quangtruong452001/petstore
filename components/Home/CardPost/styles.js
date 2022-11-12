import css from 'styled-jsx/css'

export default css`
  .cards {
    cursor: pointer;
    border-radius: 15px;
    border-color: blue;
    max-width: 33.3333%;
    flex: 33.3333%;
    padding: 10px;
  }

  .card {
    text-align: center;
    border: 1px solid #efefef;
    border-radius: 8px;
    transition: all 0.3s;
  }

  .img-wrapper {
    padding: 10px;
  }

  .card img {
    object-fit: contain;
    width: 100%;
    z-index: -1;
  }
  .card :hover {
    box-shadow: 1px -1px 15px 7px rgba(18, 2, 2, 0.3);
    -webkit-box-shadow: 1px -1px 15px 7px rgba(18, 2, 2, 0.3);
    -moz-box-shadow: 1px -1px 15px 7px rgba(18, 2, 2, 0.3);
  }

  .content {
    padding: 0 10px 20px 10px;
    color: #000;

    .title {
      font-size: 18px;
      text-align: center;
    }

    .description {
      margin-top: 8px;
      text-align: left;
      color: #796d6d;
      font-size: 14px;

      a {
        color: #796d6d;
        transition: opacity 0.3s;

        &:hover {
          color: #796d6d;
          opacity: 0.3;
        }
      }
    }
  }
`
