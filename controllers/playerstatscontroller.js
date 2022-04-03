const PlayerStat = require('../models/PlayerStat');

// @desc    Get all playerstats
// @route   GET /api/v1/playerstats
// @access  Public
exports.getPlayerStats = async (req, res, next) => {
    try {
        const playerStats = await PlayerStat.find();

        return res.status(200).json({
            success: true,
            count: playerStats.length,
            data: playerStats
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// @desc    Upload playerstats
// @route   POST /api/v1/playerstats/upload
// @access  Public
exports.uploadPlayerStats = async (req, res, next) => {
    const session = await PlayerStat.startSession();     
    session.startTransaction();

    try {
        const opts = { session };
        let playerStats = [];

        await PlayerStat.deleteMany({}, opts);

        for (var i = 0; i < req.body.length; i++) {
            const playerStat = req.body[i];
            playerStats.push(playerStat);
        }

        playerStats = await PlayerStat.create(playerStats, opts);

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            sucess: true,
            data: playerStats
        });
    } catch (err) {
        await session.abortTransaction();
        session.endSession();

        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        }
        else {
            res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}