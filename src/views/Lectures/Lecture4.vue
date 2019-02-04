<template>
    <div>
        <h1><a id="Lecture_5_DATA_TYPES_AND_DATABASES_0"></a>Lecture 4: DATA TYPES AND DATABASES</h1>
        <h3><a id="Section_1_Data_Types_1"></a>Section 1: Data Types</h3>
        <p>Information that is either digital or analogue and can be manipulated to produce a result.<br>
        Data cam exist in many forms. For example:</p>
        <ul>
            <li>Text;</li>
            <li>Numbers;</li>
            <li>Date.</li>
        </ul>
        <p>There are two main categories of data:</p>
        <ul>
            <li>Digital Data – Data that is stored and manipulated on a computer.</li>
            <li>Analogue Data – Data which is gathered without a computer.</li>
        </ul>
        <h4><a id="Data_types__Overview_13"></a>Data types – Overview</h4>
        <p>The main types of data found in a computer system are:</p>
        <ul>
            <li>Boolean (True/false);</li>
            <li>Text/Alphanumeric;</li>
            <li>Numeric;</li>
            <li>Currency;</li>
            <li>Percentage;</li>
            <li>Date/Time.</li>
        </ul>
        <h4><a id="Boolean_Data_22"></a>Boolean Data</h4>
        <p>Booleans are used when there are only two possible responses to a question. Examples of responses that can be stored as a Boolean are:</p>
        <ul>
            <li>True / False</li>
            <li>Yes / No</li>
            <li>On / Off</li>
            <li>Male / Female</li>
            <li>1 or 0</li>
        </ul>
        <h4><a id="Text__alphanumeric_30"></a>Text / alphanumeric</h4>
        <p>Text data is used for data that is made up of letters only.<br>
        Alphanumeric data is used for data that is made up of letters AND numbers.</p>
        <h4><a id="Numeric_Data_34"></a>Numeric Data</h4>
        <p>Numeric data can be in two forms: Integer and Real.<br>
        Integer Numbers: Integers are made up of whole numbers. Integers can be both positive and negative values.</p>
        <p>Real Numbers: Real numbers are those that include decimals. Real numbers can be both positive (above zero) and negative (below zero).</p>
        <h4><a id="Currency_Numbers_41"></a>Currency Numbers</h4>
        <p>Currency numbers are real numbers that have been formatted to include money symbols.Currency values that use decimals are usually shown to 2 decimal places. Currency values can be both positive (above zero) or negative (below zero).</p>
        <h4><a id="Percentage_Numbers_45"></a>Percentage Numbers</h4>
        <p>Percentage numbers are real numbers that have been formatted show values out of 100. Percentage are usually shown with the percentage symbol %. Percentage values can be positive and negative.</p>
        <h4><a id="DateTime_Data_49"></a>Date/Time Data</h4>
        <p>Date and time data can be shown in many different ways. The most common ways are shown in the table below:</p>
        <h3><a id="Section_2_Searching_for_Data_53"></a>Section 2. Searching for Data</h3>
        <p>Operators are used when searching data in database. Operator are used to give the computer ‘specific instructions’ on what to search for.</p>
        <p><em>Logical Operators:</em></p>
        <ul>
            <li>AND;</li>
            <li>OR;</li>
            <li>BETWEEN AND;</li>
            <li>LIKE * *.</li>
        </ul>
        <p><em>Athematical Operators:</em></p>
        <ul>
            <li>Equal To (=);</li>
            <li>Less Than (&lt;);</li>
            <li>More Than (&gt;);</li>
            <li>Less Than OR Equal To (&lt;=);</li>
            <li>More Than OR Equal To (&gt;=).</li>
        </ul>
        <h3><a id="Section_3_Database_Structures_69"></a>Section 3. Database Structures</h3>
        <p>A database is store of data that has been organized in some way. Databases of Data are held on a computer.<br>
        Database are so useful because they store data in a structured way. When data is structured it can be manipulated easily and the output in different ways.<br>
        <em>Databases consist of the following:</em></p>
        <ul>
            <li>Files/Tables;</li>
            <li>Record;</li>
            <li>Field;</li>
            <li>Data.</li>
        </ul>
        <h3><a id="FilesTables_79"></a>Files/Tables</h3>
        <p>A collection of records and fields is called a file. Database files are viewed as tables.<br>
        Example: The medical patients database is holding its data in a table. Lets have another look at it. The patients table is made up of 8 columns and 5 rows, Column headings are known as fields and one complete row is a full record of data.<br>
        In the example to the left the green box shows a column and the red box shows a row.</p>
        <h4><a id="Database_Records_84"></a>Database Records</h4>
        <p>One single row of a database table represents ONE record:<br>
        A database record shows all the data about one person or object.</p>
        <h4><a id="Database_Fields_88"></a>Database Fields</h4>
        <p>Each cell of a table indicates a single field. A single field can hold one piece of data.<br>
        Fields are given field names so we know what kind of data they hold. Field name are found at the top of each column.</p>
        <p><em>Fields are made up of 2 parts:</em></p>
        <ul>
            <li>The Field;</li>
            <li>The Field Name.</li>
        </ul>
        <p>Database fields hold / store the simple items of data that make up a record.<br>
        For example: each of our records consist of 8 fields:</p>
        <ul>
            <li>Patient Id;</li>
            <li>Name;</li>
            <li>D.o.B.;</li>
            <li>Gender;</li>
            <li>Phone;</li>
            <li>Doctor Id;</li>
            <li>Doctor;</li>
            <li>Room.</li>
        </ul>
        <p>Fields names are used to describe the data that is to be stored inside the field.<br>
        For example:D.o.B: is the field name used to describe the Date of Birth field. It helps the user decide what data to enter.</p>
        <h4><a id="Database_Data_110"></a>Database Data</h4>
        <p>Data is the individual pieces of information that get stored in a field.</p>
        <h4><a id="Fields_Field_Names_and_Data_example_114"></a>Fields, Field Names and Data example</h4>
        <p>The image to the right shows you a working example of fields, field names and data being used on an actual database:</p>
        <h4><a id="Sorting_Data_118"></a>Sorting Data</h4>
        <p>As mentioned before one of the uses of storing data on a database is that they allow data to be sorted very easily.<br>
        Data can be sorted in two ways:</p>
        <ul>
            <li>Ascending sorting;</li>
            <li>Descending sorting;</li>
        </ul>
        <p>Sorting data in ‘ascending order’ means to start with the lowest value and move through it in order until you reach the highest value.</p>
        <p><em>Think of these 3 examples:</em></p>
        <ul>
            <li>Text data would be sorted from A to Z;</li>
            <li>Number data would be sorted from 0 – whatever;</li>
            <li>Dates would be sorted from the earliest dates to the most recent.</li>
        </ul>
        <p>Sorting Data in ‘Descending order’ means to start with the highest value and move through it in order until you reach the lowest value.</p>
        <h4><a id="Key_Fields_unique_data_135"></a>Key Fields (unique data)</h4>
        <p>Key fields are individual pieces of data that are unique. Key fields are used to differentiate one record from another.</p>
        <h3><a id="Section_4_Types_of_Databases_139"></a>Section 4: Types of Databases</h3>
        <h4><a id="Flatfile_type_Databases_140"></a>Flat-file type Databases</h4>
        <p>Flat-file databases hold all of their data in one table only. They are only suitable for very simple databases.</p>
        <p><em>The problems with using a flat-file databases are as follows:</em></p>
        <ul>
            <li>Duplicated Data is often unnecessarily entered;</li>
            <li>Database space is wasted with this duplicated data;</li>
            <li>Duplicated Data takes a long time to enter and update.</li>
        </ul>
        <p>Data Redundancy is where you store the same data many times in your table. This repeated data needs to be typed in over and over again which takes a long time.</p>
        <h4><a id="Relational_Databases_152"></a>Relational Databases</h4>
        <p>Relation Databases use two or more tables linked together. Relational Databases do not store all the data in the same table. Repeated data is moved into it’s own table as shown in the image below:</p>
        <h4><a id="What_is_relationship_155"></a>What is relationship?</h4>
        <p>A relationship is formed when our two tables are joined together. Relationships make use of key fields and primary keys to allow the two tables to communicate with each other and share their data.<br>
        Key fields are identified using a primary key as shown in the image below:</p>
        <p>Once the tables are linked together each one can read data from the other.</p>
        <h4><a id="How_do_you_form_the_relationship_161"></a>How do you form the relationship?</h4>
        <p>In order to link the tables we need to use a common field. A common field is data that appears in BOTH tables.</p>
        <p>At this stage you may have noticed the following:</p>
        <ul>
            <li>Doctor Table – The common field (Doctor Id) is set as a key field;</li>
            <li>Patient Table – The common field is not set as a key field.</li>
        </ul>
        <p>Common fields that are not being used as key fields are known as foreign keys.</p>
        <h4><a id="What_is_a_foreign_key_and_what_are_they_used_for_170"></a>What is a foreign key and what are they used for?</h4>
        <p>A foreign key is a regular field in one table which is being used as the key field in another table. Foreign keys are used to provide the link (relationship) between the tables.</p>
        <p>The foreign key can then be used to match to the primary key and share the correct data.</p>
        <h3><a id="Section_5_Analogue_and_Digital_Data_176"></a>Section 5: Analogue and Digital Data</h3>
        <h4><a id="Analogue_Data_177"></a>Analogue Data</h4>
        <p>Analogue data use values that change very smoothly.<br>
        A good example of this is an analogue clock. An analogue clock shows the time with a smoothly moving seconds hand. The change is continuous.</p>
        <p>Sound is also a good example of analogue data. Sound waves change in a very smooth way.</p>
        <p>All analogue devices use analogue data. Examples of analogue devices include:</p>
        <ul>
            <li>Microphone;</li>
            <li>Headphones;</li>
            <li>Loud Speaker;</li>
            <li>Sensors.</li>
        </ul>
        <h4><a id="DigitalData_190"></a>DigitalData</h4>
        <p>Digital data jumps from one values to the next in a step by step sequence.A good example of thisis a digital clock. A digital clock jumps from one second to another in clear steps. The change is not smooth or continuous.</p>
        <p><em>All digital devices use digital data. Examples of digital devices include:</em></p>
        <ul>
            <li>Computers/Laptops/IPads;</li>
            <li>Mobile Phone;</li>
            <li>MP3 Player;</li>
            <li>Digital Camera.</li>
        </ul>
        <p>The name ‘Digital’ is given to all devices that store and process data in the form of ‘digits’ (numbers). These digits are known as ‘Binary’.<br>
        All computer data is really a number known as a Binary Digit. Binary is represented by the numbers 1 and 0.<br>
        Different combinations of these 1’s and 0’s are used to represent all the different kinds of data that can be stored and processed within a digital device.</p>
        <h4><a id="Analogue_and_Digital_Conversion_204"></a>Analogue and Digital Conversion</h4>
        <p><em>There are two types of data converters:</em></p>
        <ul>
            <li>Analogue to Digital Converter;</li>
            <li>Digital to Analogue Converter.</li>
        </ul>
        <h4><a id="Analogue_to_Digital_Converter_ADC_209"></a>Analogue to Digital Converter (ADC)</h4>
        <p>If we try to attach an analogue device to a computer we will need to convert the analogue data to digital before the computer cause it.<br>
        The microphone is used to pass the analogue sound waves through the ADC which will convert the sound from analogue to digital.<br>
        The ADC then passes the converted digital data into the computer where the sound can be stored and edited.</p>
        <h4><a id="Digital_to_Analogue_Converter_DAC_215"></a>Digital to Analogue Converter (DAC)</h4>
        <p>If we want to listen to digital music we would need to attach an analogue device such as loud speakers or headphones to our computer.<br>
        The computer will pass the digital sound values through a DAC which will convert the digital data to analogue.<br>
        The DAC then passes the converted analogue data onto the analogue loud speaker which we would then hear as sound waves.</p>
    </div>
</template>