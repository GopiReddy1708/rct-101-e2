import React from "react";
import { Modal, ModalBody } from "@chakra-ui/modal";
import { Input } from "@chakra-ui/input";
import { Select } from "@chakra-ui/select";
import { RadioGroup,Radio } from "@chakra-ui/radio";
import {Button} from "@chakra-ui/react";
import {TagLabel} from "@chakra-ui/tag";
import {useDisclosure} from "@chakra-ui/hooks";

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  console.log("testing")

  const {  onOpen, onClose,isOpen } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen} my={4} data-cy="add-product-button">Add new Product</Button>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalBody pb={6}>
          <TagLabel>Title</TagLabel>
          <Input data-cy="add-product-title" />
          <TagLabel>Category</TagLabel>
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <TagLabel>Gender</TagLabel>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">UniSex</Radio>
          </RadioGroup>
          <TagLabel>Price</TagLabel>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button" onClick={onClose}>Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;