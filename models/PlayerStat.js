const mongoose = require('mongoose');

const PlayerStatSchema = new mongoose.Schema({
    player: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    team: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    pos: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    att: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    attG: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    yds: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    avg: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    ydsG: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    td: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    lng: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    firstDowns: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    firstDownsPercentage: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    twentyPlus: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    fortyPlus: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    fum: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
});

module.exports = mongoose.model('PlayerStat', PlayerStatSchema);