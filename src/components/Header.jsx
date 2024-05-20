import React from "react";

const Header = ({ title }) => {
	return (
		<h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
			{title}
		</h2>
	);
};

export default Header;
