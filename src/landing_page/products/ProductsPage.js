import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import "./ProductPage.css";

export default function ProductPage() {
  return (
    <div id="productPage">
      <Hero />

      <LeftSection
        imageURL="media/images/img2.png"
        productName="Trading Dashboard"
        productDescription="A powerful dashboard that allows users to track portfolio performance, investments, and real-time stock prices."
      />

      <RightSection
        imageURL="media/images/img5.png"
        productName="Market Analytics"
        productDescription="Interactive charts and data visualization tools to analyze stock market trends and trading performance."
      />

      <LeftSection
        imageURL="media/images/img3.png"
        productName="Mobile Trading"
        productDescription="Trade stocks anytime anywhere with our responsive mobile-friendly trading platform."
      />

      <Universe />
    </div>
  );
}
