import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { CarProps } from "@/types";

interface CarDetailsProps {
  car: CarProps;
  isOpen: boolean;
  closeModal: () => void;
}

const CarDetails = ({ car, isOpen, closeModal }: CarDetailsProps) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
