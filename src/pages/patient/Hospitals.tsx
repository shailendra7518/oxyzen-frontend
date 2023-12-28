import React from "react";
import HospitalCard from "../../components/HospitalCard";
import { patientImages } from "../../data/patient/images";
import { StyledHeader } from "../../components/patient/Header";
interface HospitalsProps {}

interface HospitalCardProps {
	hospital_image: string;
	hospital_specialist: string;
	experience: string;
	hospital_name: string;
	minCost: number; // Change the type to number
	maxCost: string;
}

const Hospitals: React.FC<HospitalsProps> = () => {
	const numberOfElements = 50;
	const newArray = Array.from(
		{ length: numberOfElements },
		(_, index) => index + 1,
	);

	const customProps: HospitalCardProps = {
		hospital_image: patientImages.hospital_card_image,
		hospital_specialist: "Multi-specialist Hospital",
		experience: "7",
		hospital_name: "Pooja Hospital",
		minCost: 500, // Change the value to a number
		maxCost: "",
	};

	return (
		<>
			<StyledHeader/>
      <div className="grid grid-cols-4 gap-6  p-16">
        {newArray.map(() => (
          <HospitalCard {...customProps} />
        ))}
      </div>
    </>
  );
};

export default Hospitals;
