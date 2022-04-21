import Residence from "../../components/Residence";
import hashids from "../../utils/hashids";
import { supabase } from "../../utils/initSupabase";

const SingleResidence = ({ data, images, user, error }) => {
  console.log(data, images, user, error);
  return (
    <>
      <Residence data={data} images={images} isPreview={false} />
    </>
  );
};

export const getServerSideProps = async ({ req, res, query }) => {
  const user = await supabase.auth.api.getUserByCookie(req, res);

  const data = await supabase
    .from("residence")
    .select()
    .eq("id", hashids.decode(query.slug)[0]);

  const images = await supabase
    .from("images")
    .select()
    .eq("residence_id", hashids.decode(query.slug)[0]);

  const urls = images.body.map((image) => {
    if (!image) {
      return null;
    }

    return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/residence/${image.image}`;
  });

  if (data.error || urls.error) {
    return {
      props: {
        data: null,
        images: null,
        user: null,
        error: true,
      },
    };
  }

  return {
    props: {
      data: data.body[0],
      images: urls,
      user: user.data,
      error: false,
    },
  };
};

export default SingleResidence;
