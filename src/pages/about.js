import wrapper from "../redux/store";
import IntroductionConatiner from "../containers/IntroductionContainer";
import QnaContainer from "../containers/Qna";

function About({ title, description }) {
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="decsription" content={description} />
      </head>
      <IntroductionConatiner />
      <QnaContainer />
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((_store) => async (_) => {
  const title = "ABOUT | CuckooQ";
  const description = "CuckooQ About";
  return {
    props: {
      title,
      description,
    },
  };
});

export default About;
