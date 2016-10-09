# Render templated data

Combines CSV data via a Mustache template and renders each templated row to the console.

## Example

### data.csv
```
name,planet
Boba Fett,Kamino
Darth Maul,Dathomir
Chewbacca,Kashyyyk
Jar Jar Binks,Naboo
Princess Leia,Alderaan
Admiral Ackbar,Mon Calamari
Han Solo,Corellia
General Grievous,Kalee
```

### template.mst
```
{{name}} is from {{planet}}
```

### Run
```
node render.js -d data.csv -t template.mst
```
```
Boba Fett is from Kamino
Darth Maul is from Dathomir
Chewbacca is from Kashyyyk
Jar Jar Binks is from Naboo
Princess Leia is from Alderaan
Admiral Ackbar is from Mon Calamari
Han Solo is from Corellia
General Grievous is from Kalee
```
