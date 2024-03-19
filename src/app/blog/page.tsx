import React from "react";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="mt-20 text-4xl text-center flex flex-col justify-between content-center">
      <div className="h-[65vh]">
        <p>Blog page under construction</p>
        <p>
          Return to
          <Link href="/" className="text-logoBlue p-2">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
