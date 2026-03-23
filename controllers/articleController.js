const Article = require('../models/articleModel');

const createArticle = (req, res) => {
    const article = req.body;

    if (!article.titre || !article.auteur) {
        return res.status(400).json({ message: 'Titre et auteur obligatoires' });
    }

    Article.createArticle(article, (err, id) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({
                message: 'Article créé',
                id: id
            });
        }
    });
};

const getAllArticles = (req, res) => {
    Article.getAllArticles((err, rows) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(rows);
        }
    });
};

const getArticleById = (req, res) => {
    Article.getArticleById(req.params.id, (err, row) => {
        if (!row) {
            return res.status(404).json({ message: 'Article non trouvé' });
        }
        res.json(row);
    });
};

const updateArticle = (req, res) => {
    Article.updateArticle(req.params.id, req.body, function(err) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ message: 'Article modifié' });
        }
    });
};

const deleteArticle = (req, res) => {
    Article.deleteArticle(req.params.id, function(err) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json({ message: 'Article supprimé' });
        }
    });
};

const searchArticles = (req, res) => {
    Article.searchArticles(req.query.query, (err, rows) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(rows);
        }
    });
};

const getArticlesWithFilters = (req, res) => {
    const filters = {
        categorie: req.query.categorie,
        auteur: req.query.auteur,
        date: req.query.date
    };

    Article.getArticlesWithFilters(filters, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
};

module.exports = {
    createArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle,
    searchArticles,
    getArticlesWithFilters 
};