CREATE DATABASE anecdotic;

\c anecdotic

CREATE TABLE IF NOT EXISTS facts (
                                     id SERIAL PRIMARY KEY,
                                     fact TEXT NOT NULL
);

DELETE FROM facts
WHERE id NOT IN (
    SELECT MIN(id) FROM facts GROUP BY fact
);

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints
        WHERE table_name = 'facts' AND constraint_name = 'unique_fact'
    ) THEN
ALTER TABLE facts ADD CONSTRAINT unique_fact UNIQUE (fact);
END IF;
END $$;

INSERT INTO facts (fact) VALUES
     ('Les escargots peuvent dormir pendant trois ans d''affilée.'),
     ('La Terre pèse environ 5,972 × 10^24 kilogrammes.'),
     ('Les dauphins ont des noms uniques pour s''appeler entre eux.'),
     ('Les koalas ont des empreintes digitales similaires à celles des humains.'),
     ('Le ketchup était autrefois vendu comme médicament.'),
     ('Les éléphants peuvent mourir de chagrin.'),
     ('Les moutons peuvent reconnaître le visage d''au moins 50 autres moutons.'),
     ('Les chats peuvent être allergiques aux humains.'),
     ('Les chauves-souris dorment pendant environ 20 heures par jour.'),
     ('Les fourmis peuvent se déplacer à une vitesse de 800 mètres par heure.'),
     ('Les ours polaires sont gauchers.'),
     ('Les pingouins ont des genoux.'),
     ('Les grenouilles peuvent vomir leur estomac pour se nettoyer.'),
     ('Les chèvres ont des accents.'),
     ('Les mouches bourdonnent en fa dièse.'),
     ('Les abeilles dorment environ cinq heures par jour.'),
     ('Les girafes n''ont pas de cordes vocales.'),
     ('Les papillons peuvent boire du sang.'),
     ('Les corbeaux sont capables de reconnaître les visages humains.'),
     ('Les éléphants peuvent entendre les nuages.'),
     ('Les kangourous ne peuvent pas sauter en arrière.'),
     ('Les chameaux ont trois paupières.'),
     ('Les ours polaires sont invisibles aux caméras infrarouges.'),
     ('Les chats ont des dents de lait.'),
     ('Les dauphins dorment avec un œil ouvert.')
ON CONFLICT (fact) DO NOTHING;
