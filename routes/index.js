const express = require('express');
const { isEmpty } = require('lodash');
const HomeLink = require('../models/homeLink');
const Song = require('../models/song');
const Photo = require('../models/photo');
const Documentary = require('../models/documentary');
const router = express.Router();

router.post('/api/do', async (req, res) => {
    const data = {}
    try {
        return res.json({
            data
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }    
});

router.post('/api/documentaryPhotography', async (req, res) => {
    if (isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body should not be empty',
            statusCode: 403
        });
    }
    const { location } = req.body;
    
    try {
        const photos = await Photo.find({ category: 'photography', subcategory: 'documentary', location: location });

        return res.json({
            photos
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }        
});

router.get('/api/links', async (req, res) => {

    try {
        const links = await HomeLink.find({});

        return res.json({
            links
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.get('/api/episodePhotos', async (req, res) => {

    try {
        const photos = await Photo.find({ category: 'humanHistoryRevisited' });
                                            
        return res.json({
            photos
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }       
});

router.get('/api/streetPhotography', async (req, res) => {

    try {
        const photos = await Photo.find({ category: 'photography', 
                                            subcategory: 'street' });
                                            
        return res.json({
            photos
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }       
});

router.get('/api/photos', async (req, res) => {

    try {
        const photos = await Photo.find({});

        return res.json({
            photos
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.get('/api/songs', async (req, res) => {

    try {
        const songs = await Song.find({});

        return res.json({
            songs
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.get('/api/documentaries', async (req, res) => {

    try {
        const documentaries = await Documentary.find({});

        return res.json({
            documentaries
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.get('/api/poverty', async (req, res) => {

    try {        
        const poverty = await Photo.find({ category: 'photography', subcategory: 'poverty' });                                                              
        return res.json({
            poverty
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.get('/api/kids', async (req, res) => {

    try {        
        const kids = await Photo.find({ category: 'photography', subcategory: 'kids' });                                                              
        return res.json({
            kids
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.get('/api/animals', async (req, res) => {

    try {        
        const animals = await Photo.find({ category: 'photography', subcategory: 'animals' });                                                              
        return res.json({
            animals
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.get('/api/drawings', async (req, res) => {

    try {
        const drawings = await Photo.find({ category: 'drawing' });

        return res.json({
            drawings
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

// router.post('/api/searchPhotoBySrc', async (req, res) => {
    
//     if (isEmpty(req.body)) {
//         return res.status(403).json({
//             message: 'Body should not be empty',
//             statusCode: 403
//         });
//     }
    
//     const { src } = req.body;  
        
//     try {
//         const photo = await Photo.findOne({ src: src });
//         return res.json({
//             photo
//         });
//     } catch (error) {
//         return res.status(500).json({
//             message: 'Internal Server error'
//         });
//     }
// });

// router.post('/api/updateDocumentary', async (req, res) => {
//     if (isEmpty(req.body)) {
//         return res.status(403).json({
//             message: 'Body should not be empty',
//             statusCode: 403
//         });
//     } 
            
//     const { id, update } = req.body;  

//     try {        
//         await Documentary.updateOne( { _id: id }, update, { upsert: true, new: true }, ( err ) => {
//             if (err) return res.json({ success: false, error: err });
//             return res.json({ success: true });
//         });
//     } catch (error) {
//         console.log('Error: ', error);
//         res.status(500).json({
//             message: 'Internal Server error',
//             statusCode: 500
//         });
//     }
// });

// router.post('/api/updatePhoto', async (req, res) => {
//     if (isEmpty(req.body)) {
//         return res.status(403).json({
//             message: 'Body should not be empty',
//             statusCode: 403
//         });
//     } 
            
//     const { id, update } = req.body;  

//     try {        
//         await Photo.updateOne( { _id: id }, update, { upsert: true, new: true }, ( err ) => {
//             if (err) return res.json({ success: false, error: err });
//             return res.json({ success: true });
//         });
//     } catch (error) {
//         console.log('Error: ', error);
//         res.status(500).json({
//             message: 'Internal Server error',
//             statusCode: 500
//         });
//     }
// });

router.post('/addPhoto', async (req, res) => {
    if (isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body should not be empty',
            statusCode: 403
        });
    }
    const { src, category, subcategory, width, height, description, rank} = req.body;

    const newPhoto = new Photo({src, category, subcategory, width, height, description, rank});
        
    try {
        await newPhoto.save();
        // res.json({
        //     message: 'Data successfully saved',
        //     statusCode: 200,
        //     src, category, subcategory, width, height, description, rank
        // });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Internal Server error',
            statusCode: 500
        });
    }
});


module.exports = router;