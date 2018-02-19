import fairybread from 'fairybread';
const sheet = new fairybread();
const bodyTag = sheet.css`
 body {
        background: #0B0B3F;
        margin: 0px;
        padding: 0px;
        font-family: 'Ubuntu', sans-serif;
        opacity: 1;
      }
      #logo {
        height: 200px;
        margin: 0 auto;
        display:block;
      }
      #example-img {
        width: 100%;
      }
      p,
      h1 {
        padding-left: 16px;
        padding-right: 16px;
      }
      h1 {
        font-family: 'Quicksand', sans-serif;
        margin-top: 8px;
        margin-bottom: 8px;
      }
      p {
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 16px;
      }
      .showcase {
        width: 400px;
        position: relative;
        margin: 50px auto 50px auto;
        clear: both;
        border-radius: 10px;
        border: 1px solid rgba(255, 0, 177, 0.55);
        background: #fff;
        padding: 10px;
        box-shadow:8px 8px 55px 8px rgba(255, 0, 177, 0.44)
      }
      .title-block {
        width: 400px;
        position: relative;
        margin: 50px auto 50px auto;
        clear: both;
        background: transparent;
        color: #fff;
      }
      .showcase::after {
        content: "";
        background: #ff0389;
        position: absolute;
        bottom: -15px;
        width: 80%;
        height: 30px;
        border-radius: 8px;
        z-index: -1;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
`
export default bodyTag;