import Layout from "../components/layout";
import { useState } from "react";
import { Accordion } from "../components/atoms/Accordion";
import { SideMenu } from "../components/atoms/SideMenu";

export default function lifejourney() {
  const [anchorId, setAnchorId] = useState("");

  // function handleSetAnchor() {
  //   console.log('anchor is = ', anchorId)
  //   setAnchorId(anchorId);
  // }

  return (
    <Layout>
      <SideMenu selectedItem={setAnchorId} />

      <Accordion
        id="GettingReady"
        title="Getting Ready"
        summary="Getting Ready summary text"
        anchorId={anchorId}
      ></Accordion>

      <Accordion
        id="LoremIpsun"
        title="Lorem Ipsun"
        summary="Lorem ipsun dolor summary"
        anchorId={anchorId}
      ></Accordion>

      <Accordion
        id="WhenArrives"
        title="When your child arrives"
        summary="When your child arrives summary text"
        anchorId={anchorId}
      ></Accordion>
    </Layout>
  );
}
