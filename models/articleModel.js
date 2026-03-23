const db = require('../config/db');

const createArticle = (article, callback) => {
    const { titre, contenu, auteur, date, categorie, tags } = article;

    db.run(
        `INSERT INTO articles (titre, contenu, auteur, date, categorie, tags)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [titre, contenu, auteur, date, categorie, tags],
        function(err) {
            callback(err, this.lastID);
        }
    );
};

const getAllArticles = (callback) => {
    db.all(`SELECT * FROM articles`, [], callback);
};

const getArticleById = (id, callback) => {
    db.get(`SELECT * FROM articles WHERE id = ?`, [id], callback);
};

const updateArticle = (id, article, callback) => {
    const { titre, contenu, categorie, tags } = article;

    db.run(
        `UPDATE articles
         SET titre=?, contenu=?, categorie=?, tags=?
         WHERE id=?`,
        [titre, contenu, categorie, tags, id],
        callback
    );
};

const deleteArticle = (id, callback) => {
    db.run(`DELETE FROM articles WHERE id=?`, [id], callback);
};

const searchArticles = (query, callback) => {
    db.all(
        `SELECT * FROM articles
         WHERE titre LIKE ? OR contenu LIKE ?`,
        [`%${query}%`, `%${query}%`],
        callback
    );
};

const getArticlesWithFilters = (filters, callback) => {
    let sql = `SELECT * FROM articles WHERE 1=1`;
    const params = [];

    if (filters.categorie) {
        sql += ` AND categorie = ?`;
        params.push(filters.categorie);
    }
    if (filters.auteur) {
        sql += ` AND auteur = ?`;
        params.push(filters.auteur);
    }
    if (filters.date) {
        sql += ` AND date = ?`;
        params.push(filters.date);
    }

    db.all(sql, params, callback);
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