import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full sm:text-3xl text-2xl font-semibold text-[#00df9a]">
          REACT. <strong>Finance</strong>
        </h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          deserunt saepe delectus quidem! Accusamus reiciendis alias totam vitae
          mollitia minus.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={25} />
            <FaInstagram size={25} />
            <FaSquareXTwitter size={25} />
            <FaGithubSquare size={25} />
            <FaDribbbleSquare size={25} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
            <h6 className="font-bold text-gray-500">Solutions</h6>
            <ul>
                <li className="py-2 text-sm">Analytics</li>
                <li className="py-2 text-sm">Marketing</li>
                <li className="py-2 text-sm">Commerce</li>
                <li className="py-2 text-sm">Insights</li>
            </ul>
        </div>
        <div>
            <h6 className="font-bold text-gray-500">Support</h6>
            <ul>
                <li className="py-2 text-sm">Pricing</li>
                <li className="py-2 text-sm">Documentation</li>
                <li className="py-2 text-sm">Guides</li>
                <li className="py-2 text-sm">API Status</li>
            </ul>
        </div>
        <div>
            <h6 className="font-bold text-gray-500">Company</h6>
            <ul>
                <li className="py-2 text-sm">About</li>
                <li className="py-2 text-sm">Blog</li>
                <li className="py-2 text-sm">Jobs</li>
                <li className="py-2 text-sm">Press</li>
                <li className="py-2 text-sm">Careers</li>
            </ul>
        </div>
        <div>
            <h6 className="font-bold text-gray-500">Legal</h6>
            <ul>
                <li className="py-2 text-sm">Claim</li>
                <li className="py-2 text-sm">Policy</li>
                <li className="py-2 text-sm">Terms</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
