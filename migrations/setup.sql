CREATE DATABASE IF NOT EXISTS anecdotic;

\c anecdotic;

CREATE TABLE IF NOT EXISTS facts (
     id SERIAL PRIMARY KEY,
     fact TEXT NOT NULL
);

INSERT INTO facts (fact) VALUES
('Les escargots peuvent dormir pendant trois ans d\'affilée.'),
('La Terre pèse environ 5,972 × 10^24 kilogrammes.'),
('Les dauphins ont des noms uniques pour s\'appeler entre eux.'),
('Les koalas ont des empreintes digitales similaires à celles des humains.'),
('Le ketchup était autrefois vendu comme médicament.');
