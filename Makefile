R:

	Rscript -e "rmarkdown::render('data/icerinks.Rmd')"
	open data/icerinks.html

R_deploy:

	cp data/icerinks.html /Volumes/www_html/multimedia/graphics/projectFiles/Rmd/
	rsync -rv data/icerinks_files /Volumes/www_html/multimedia/graphics/projectFiles/Rmd
	open http://private.boston.com/multimedia/graphics/projectFiles/Rmd/icerinks.html