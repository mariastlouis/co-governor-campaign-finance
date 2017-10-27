$(document).ready(function() {
    $('#example').DataTable( {
 "ajax": "data/candidate_json2.json",

  columns: [
            { data: 'CO_ID' },
            { data: 'candidate_full' },
            { data: 'party' },
            { data: 'ContributionAmount',
            render: $.fn.dataTable.render.number( ',', '.', 2, '$' )
             },
            { data: 'donor' },
            { data: 'City' },
            { data: 'State' },
            { data: 'Zip' },
            { data: 'ContributionDate' },
            { data: 'RecordID' },
            { data: 'ContributionType' },
            { data: 'donorEmployer' },
            { data: 'donorOccupation' }
            
        ],
    "responsive": true,
    "iDisplayLength": 50,
    "deferRender": true,

   "columnDefs": [
            {
                "targets": [0],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [2],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [9],
                "visible": false,
                "searchable": false
            }
        ],

        initComplete: function () {
            this.api().columns('.select-filter').every( function () {
                var column = this;
                var select = $('<select class="main-select"><option value="all">Select a candidate</option></select>')
                    .appendTo( $('#select-candidate').empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                          
                            $(this).val(),
                            clearDiv(),
                            setCandidate($(this).val()),

                            // clearDiv()
                            
                        );
 
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );
 
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                  
                } );
            } );
        }
        
} );


function clearDiv () {
$('#candidate-info').html("");
$('#database-hed').html("")
}


   var candidateTotal = [
   {
        "id": 20135025390,
        "name": "Jim Rundberg",
        "party": "Republican",
        "photoUrl": "http://www3.gazette.com/maria/governor_campaign_finance_2017/images/jim_rundberg.jpg",
        "total": 331.66,
        "count": 1
    },
    {
        "id": 20165031883,
        "name": "Noel Ginsburg",
        "party": "Democrat",
        "photoUrl": "http://www3.gazette.com/maria/governor_campaign_finance_2017/images/noel_ginsburg.jpeg",
        "total": 473376.84,
        "count": 774
    },
    {
        "id": 20175031889,
        "name": "Michael Johnston",
        "party": "Democrat",
        "photoUrl": "http://www3.gazette.com/maria/governor_campaign_finance_2017/images/michael_johnston.jpg",
        "total": 1265267.98,
        "count": 5883
    },
    {
        "id": 20175031909,
        "name": "Victor Mitchell",
        "party": "Republican",
        "photoUrl": "http://www3.gazette.com/maria/governor_campaign_finance_2017/images/victor_mitchell.jpg",
        "total": 27148.23,
        "count": 358
    },
    {
        "id": 20175031962,
        "name": "Lew Gaiter",
        "party": "Republican",
        "photoUrl": "http://www3.gazette.com/maria/governor_campaign_finance_2017/images/lew_gaiter.jpg",
        "total": 10821.27,
        "count": 33
    },
    {
        "id": 20175032022,
        "name": "George Brauchler",
        "party": "Republican",
        "photoUrl": "http://www3.gazette.com/maria/governor_campaign_finance_2017/images/george_brauchler.jpg",
        "total": 295309.33,
        "count": 1349
    },
    {
        "id": 20175032027,
        "name": "Ed Perlmutter",
        "party": "Democrat",
        "photoUrl": "http://www3.gazette.com/maria/governor_campaign_finance_2017/images/ed_perlmutter.jpg",
        "total": 140108.76,
        "count": 2165
    },
    {
        "id": 20175032028,
        "name": "Cary Kennedy",
        "party": "Democrat",
        "photoUrl": "http://www3.gazette.com/maria/governor_campaign_finance_2017/images/cary_kennedy.jpeg",
        "total": 576179.8,
        "count": 3733
    },
    {
        "id": 20175032055,
        "name": "Doug Robinson",
        "party": "Republican",
        "photoUrl": "http://www3.gazette.com/maria/governor_campaign_finance_2017/images/doug_robinson.jpg",
        "total": 282949,
        "count": 469
    },
    {
        "id": 20175032085,
        "name": "Kathleen Cunningham",
        "party": "Unaffiliated",
        "photoUrl": "",
        "total": 11,
        "count": 3
    },
    {
        "id": 20175032123,
        "name": "Greg Lopez",
        "party": "Republican",
        "photoUrl": "http://www3.gazette.com/maria/governor_campaign_finance_2017/images/greg_lopez.jpg",
        "total": 7650,
        "count": 41
    },
    {
        "id": 20175032139,
        "name": "Jared Polis",
        "party": "Democrat",
        "photoUrl": "http://www3.gazette.com/maria/governor_campaign_finance_2017/images/jared_polis.jpg",
        "total": 731555.84,
        "count": 2201
    },
    {
        "id": 20175032283,
        "name": "Donna Lynne",
        "party": "Democrat",
        "photoUrl": "http://www3.gazette.com/maria/governor_campaign_finance_2017/images/donna_lynne.jpg",
        "total": 384910.05,
        "count": 884
    },
    {
        "id": 20175033116,
        "name": "Walker Stapleton",
        "party": "Republican",
        "photoUrl": "http://www3.gazette.com/maria/governor_campaign_finance_2017/images/walker_stapleton.png",
        "total": 8031,
        "count": 22
    }
]

function setCandidate(candidate) {

let candidateInfo = candidateTotal.filter(function(person){
  return person.name === candidate;
})
prependCandidate(candidateInfo[0].name, 
    candidateInfo[0].party, 
    candidateInfo[0].total.toLocaleString(), 
    candidateInfo[0].count.toLocaleString(), 
    candidateInfo[0].photoUrl  )
  
candidateHead (candidateInfo[0].name)
  } 

function prependCandidate (name, party, total, count, photo) {
  $('#candidate-info').prepend(


   `<article>
      <div class = "candidate-left">
        <div class ="round-image">
          <img src = "${photo}" class="round-large"/>
        </div>
        <div class ="candidate-name">
          <h2> ${name} </h2>
          <p class ="party"> ${party}  </p>
        </div>
      </div>
      <div class ="candidate-right">
        <div class = "money-div">
        <p class="candidate-money"> Total raised:</p>
        <p class ="accent-color"> $${total}</span> </p> 
        </div>
        <div class = "total-donations">
        <p class="candidate-money"> Number of donations:</p>
        <p class = "accent-color"> ${count}</p>
        </div>
      </div>
    </article>`)
};


function candidateHead(name) {
     $('#database-hed').prepend(
    `<h3> Donations for ${name}</h3>
       <p class="explainer"> Donations are those reported by 
       candidate committees between Jan. 1 - Oct. 10 2017.  </p>`
    )}


} ); 