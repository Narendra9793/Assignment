const express = require('express');
const router = express.Router();
const Contact = require('../models/contact-model');


router.get("/:ownerId", async (req, res) => {
    try {
        const ownerId = req.params.ownerId;

        const contacts = await Contact.findAll({
            where: { userId: ownerId } 
        });

        res.status(200).json(contacts);
    } catch (error) {
        console.error("Error fetching contacts: ", error);
        res.status(500).json({ error: "Error fetching contacts" });
    }
});
router.post("/add-contact", async (req, res) => {
    try {
        
        if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.phone_number) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        

        const newContact = await Contact.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone_number: req.body.phone_number,
            job_title: req.body.job_title,
            company: req.body.company,
            userId: req.body.userId
        });


        res.status(201).json(newContact);
    } catch (error) {
        console.error("Error adding contact: ", error);


        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ error: 'Validation failed', details: error.errors });
        }

        res.status(500).json({ error: "Error adding contact" });
    }
});
router.put("/:id", async (req, res) => {
    try {
        const contactId = req.params.id;
        const updatedData = req.body; 

        if (!contactId) {
            return res.status(400).json({ error: "Contact ID is required" });
        }

        const [rowsUpdated] = await Contact.update(updatedData, {
            where: { id: contactId },
        });

        if (rowsUpdated === 0) {
            
            return res.status(404).json({ msg: "Contact not found!" });
        }

        res.status(200).json({ msg: "Contact updated successfully!" });
    } catch (error) {
        console.error("Error updating contact: ", error);
        res.status(500).json({ error: "Error updating contact" });
    }
});



router.delete("/:id", async (req, res) => {
    try {
        const contactId = req.params.id; 

        if (!contactId) {
            return res.status(400).json({ error: "Contact ID is required" });
        }

        const deletedContact = await Contact.destroy({
            where: { id: contactId },
        });

        if (deletedContact === 0) {
            
            return res.status(404).json({ msg: "Contact not found!" });
        }

        res.status(200).json({ msg: "Contact deleted successfully!" });
    } catch (error) {
        console.error("Error deleting contact: ", error);
        res.status(500).json({ error: "Error deleting contact" });
    }
});


module.exports = router 
