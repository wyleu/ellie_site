QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
    assert.ok( 'fred' === 'fred', 'Fred is Fred');
});

QUnit.test( "Appends a div", function( assert ) {
  var fixture = $( "#qunit-fixture" );

  fixture.append( "<div>hello!</div>" );
  assert.equal( $( "div", fixture ).length, 1, "div added successfully!" );
});

QUnit.test( "Appends a span", function( assert ) {
  var fixture = $( "#qunit-fixture" );

  fixture.append("<span>hello!</span>" );
  assert.equal( $( "span", fixture ).length, 1, "span added successfully!" );
});
