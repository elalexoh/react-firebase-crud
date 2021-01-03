import React, { useEffect } from "react";
import LinkForm from "./LinkForm";

import { db } from "../firebase";

const Links = () => {
  const addOrEditLink = async (linkObject) => {
    console.debug(linkObject);
    await db.collection("links").doc().set(linkObject);
    console.debug("tarea agregada");
  };

  const getLinks = async () => {
    db.collection("links").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className="col-12">
      <LinkForm addOrEditLink={addOrEditLink} />
    </div>
  );
};
export default Links;
