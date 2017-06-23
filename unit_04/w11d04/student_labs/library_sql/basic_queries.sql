-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns


-- Get all information about all authors
Author.all

-- Get just the name and birth year of all authors
Author.all.select(:name, :birth_year)

-- Get all authors born in the 20th centruy or later
Author.where("birth_year > 1900")

-- Get all authors born in the USA
Author.where(nationality: "United States of America")

-- Get all books published on 1985
Book.where(publication_date: 1985)

-- Get all books published before 1989
Book.where("publication_date < 1989")

-- Get just the title of all books.
Book.all.select(:title)

-- Get just the year that 'A Dance with Dragons' was published
  -- Cry when you realize how long it's been
Book.where(title: "A Dance with Dragons").select(:publication_date)

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
Book.where("title ILIKE '% the %' OR title ILIKE 'the %'")

-- Add yourself as an author
Author.create(name: "Monica", nationality:"United States of America", birth_year:1989)

-- Add two books that you'd like to write (you can hard-code your id as the author id)
Book.create(title: "Book Name Here", publication_date: 2017, author_id: 9)
Book.create(title: "Some Other Book", publication_date: 2018, author_id: 9)

-- Update one of your books to have a new title
Book.where(id: 70).update(title: "A New Book")

-- Delete your books
Book.where(author_id:9).destroy_all

-- Delete your author entry
Author.find(9).delete
