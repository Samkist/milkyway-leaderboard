import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createSwaggerSpec } from 'next-swagger-doc';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';
import {connect} from "../utils/connection";
import {Schema} from "mongoose";
const m2s = require('mongoose-to-swagger');


const SwaggerUI = dynamic<{
  spec: any;
}>(import('swagger-ui-react'), { ssr: false });

async function ApiDoc({spec}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec}/>;
}

export const getStaticProps: GetStaticProps = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Next Swagger API Example',
        version: '1.0',
      }
    },
    apiFolder: "api/leaderboard"
  });

  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;