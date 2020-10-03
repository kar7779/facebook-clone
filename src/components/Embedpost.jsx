import React from "react";
import { FacebookProvider, Page } from "react-facebook";
function Embedpost() {
  return (
    <div>
      <FacebookProvider appId="#">
        <Page
          href="https://www.facebook.com/karthik.chinnu.522"
          tabs="timeline"
        />
      </FacebookProvider>
    </div>
  );
}

export default Embedpost;
