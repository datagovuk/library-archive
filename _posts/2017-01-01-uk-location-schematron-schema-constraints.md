---
title: UK Location Schematron Schema Constraints
summary: 
layout: post
permalink: /library/uk-location-schematron-schema-constraints
created: 14/1/2013
revised: 19/4/2013
resources:
    - filename: Schematron Schema Constraints_10.zip
      url: https://data.gov.uk/sites/default/files/Schematron Schema Constraints_10.zip
      mimetype: application/zip
categories:
    - Location
---

<p>Validating a UK Location metadata record is a three stage process. First, a candidate metadata set must be validated against the ISO 19139 schemas. If the metadata set proves to be schema valid, it can then be validated against the ISO 19139 Table A.1 Constraints Schematron schema. The Schematron schema relies on hardcoded XPath statements which will only work effectively on a schema valid XML set. Finally, if the XML is still valid it can be validated against the GEMINI2 Profile Schematron schema.</p>
<p>For more information, see the UK GEMINI Encoding Guidance and Schematron technical guidance <a href="http://data.gov.uk/library/uk-gemini-schematron-schema-technical-guidance" rel="nofollow">http://data.gov.uk/library/uk-gemini-schematron-schema-technical-guidance</a>.</p>
<p>The schematron files are available in this Zip archive.</p>
