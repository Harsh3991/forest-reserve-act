const Joi = require('joi');

exports.validateCitizenRegistration = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    aadhaarNumber: Joi.string().length(12).required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    address: Joi.string().required(),
    category: Joi.string().valid('ST', 'OTFD').required(),
    familyMembers: Joi.array().items(Joi.object({
      name: Joi.string(),
      relation: Joi.string(),
      age: Joi.number()
    })),
    documents: Joi.array().items(Joi.string()),
  });
  return schema.validate(data);
};

exports.validateCitizenUpdate = (data) => {
  const schema = Joi.object({
    name: Joi.string(),
    phone: Joi.string(),
    email: Joi.string().email(),
    address: Joi.string(),
    category: Joi.string().valid('ST', 'OTFD'),
    familyMembers: Joi.array().items(Joi.object({
      name: Joi.string(),
      relation: Joi.string(),
      age: Joi.number()
    })),
    documents: Joi.array().items(Joi.string()),
  });
  return schema.validate(data);
};