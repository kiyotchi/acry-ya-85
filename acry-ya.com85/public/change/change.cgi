#!/usr/bin/perl

use lib './lib/';
use DBI;
use Data::Dumper;
use Date::Parse;
use Jcode;
use DBIx::QueryLog;

my $mode = $ARGV[0];
my @columns;

open my $fh, '>', $mode . '__query.log' or die $!;
$DBIx::QueryLog::OUTPUT = $fh;


if( $mode eq 'addresslist' ){
     @columns = @{getColumnsAddresslist()};
}
elsif( $mode eq 'confdatas' ){
    @columns = @{getColumnsConfdatas()};
}
elsif( $mode eq 'itempoint' ){
    @columns = @{getColumnsItempoint()};
}
elsif( $mode eq 'members' ){
    @columns = @{getColumnsMembers()};
}
elsif( $mode eq 'order_history' ){
    @columns = @{getColumnsOrder_history()};
}
elsif( $mode eq 'point' ){
    @columns = @{getColumnsPoint()};
}
elsif( $mode eq 'reminder' ){
    @columns = @{getColumnsReminder()};
}
elsif( $mode eq 'specialpoinday' ){
    @columns = @{getColumnsSpecialpoinday()};
}
elsif( $mode eq 'specialpointtargets' ){
    @columns = @{getColumnsSpecialpointtargets()};
}
elsif( $mode eq 'temp_point' ){
    @columns = @{getColumnsTemp_point()};
}


# ƒtƒ@ƒCƒ‹‘I‘ğ
my $file = {
    'addresslist' => 'addresslist.db',
    'confdatas' => 'confdatas.db',
    'itempoint' => 'specialpoinday.db',
    'members' => 'members.db',
    'order_history' => 'order_history.db',
    'point' => 'members.db',
    'reminder' => 'reminder.db',
    'specialpoinday' => 'specialpoinday.db',
    'specialpointtargets' => 'specialpoinday.db',
    'temp_point' => 'temp_point.db',
};



my $dbh = DBI->connect(
    'dbi:SQLite:dbname=../cgibin/memberadmin--/DB/' . $file->{$mode},
    undef,
    undef,
    {
      AutoCommit => 1,
      RaiseError => 0,
      PrintError => 1
    }
);
$dbh->do("set names sjis;");
#print $file->{$mode} . "\n\n";

# mysql -p -u acry-ya -h 124.108.39.197 acry-ya
# 4CgwzTri2z
# LOAD DATA INFILE "/var/www/vhosts/acry-ya.com/change/order_history__dump.csv" INTO TABLE order_history;
# load data local infile "/var/www/vhosts/acry-ya.com/change/order_history__dump.csv" into table order_history fields terminated BY ',' enclosed by '"' lines terminated by 'rn' IGNORE 1 LINES; 
my $dsn = 'DBI:mysql:akuriya_db:acry-ya-db.cdx5i26u0ch3.ap-northeast-1.rds.amazonaws.com:3306';
my $dbh2 = DBI->connect(
		$dsn,
		'akuriya_root',
		'pJ82BbZAcXBr',
		{
			AutoCommit => 1,
			RaiseError => 1,
			PrintError => 0,
                        ShowErrorStatement => 0,
		}
	);
#$dbh2->do("set names sjis;");

#print "SELECT * FROM " . $mode . ';' . "\n\n";


my $sth = $dbh->prepare("SELECT * FROM " . $mode );
$sth->execute();
my $i = 0;

my @hatena = ();
foreach my $col( @columns ){
    push( @hatena, '?' );
}

my $sth2 = $dbh2->prepare("INSERT INTO " .$mode ." ( " . join(',',@columns) ." ) VALUES ( " . join(',',@hatena) ." )");
$dbh2->do("set names sjis");
print "count!! " . $sth->rows . "\n\n";

my $errCSV = '';
my $erroDump = '';
while (my $ary_ref = $sth->fetchrow_arrayref) {
    #$ary_ref->[4] =~ s/_/\\/g;
    
    my @vals = ();
    my @checks = ();
    foreach my $col( @{$ary_ref} ){
        $col =~ s/_/\\/g;
        $col =~ s/\\$//sg;
        #$col =~ s/\\{3}\'//g;#'
        $col =~ s/\\\\/\\/sg;
        push( @vals, $col );
        my $cvt = Jcode::convert( $col, 'utf8', 'sjis' );
        push( @checks, $cvt );
    }
    
    my $setErr = join ',', map {(s/"/""/g or /[\r\n,]/) ? qq("$_") : $_} @vals;#"
    $setErr .= "\n";
    $flg = 0;
    
    
    eval{
        $sth2->execute( @vals );
    };
    if($@){
        #open( FH, ">", 'test__err.csv');
        #print FH $vals[3];
        #print FH "\n\n\n\n\n";
        #print FH Dumper( \@vals );
        #close( FH );
        #print Jcode::convert( $vals[3], 'utf8', 'sjis' );
        
        print "err $i " . Jcode::convert( $sth2->errstr, 'utf8', 'sjis')  . "\n\n";
        $erroDump .= "----" . $i . "\n". Dumper( \@vals ) . "\n\n\n\n";
        $errCSV .= $setErr;
        #exit();
    }
    
    
    
    if( ( $i % 100) == 0 )
    {
        print $i . 'is OK!' . "\n";
    }
    $i ++ ;
}
$sth->finish;

if( $errCSV ne '' )
{
    print 'Error' . "\n";
    open( FH, ">", $mode .'__err.csv');
    print FH $errCSV;
    close( FH );
    open( FH, ">", $mode .'__dump.csv');
    print FH $erroDump;
    close( FH );
}





#// ----------------------------------------------------
sub getColumnsAddresslist
{
    return [
        'idaddresslist',
            'idmembers',
            'name_a',
            'name_b',
            'yomi_a',
            'yomi_b',
            'com',
            'com_yomi',
            'com_post',
            'zip_a',
            'zip_b',
            'tdfken',
            'address1',
            'address2',
            'tel_a',
            'tel_b',
            'tel_c',
            'transDetails'
        ];
}


#// ----------------------------------------------------
sub getColumnsConfdatas(){
    
    return [
        'keyname',
        'value',
        'value2',
        'value3',
        'value4',
        'value5',
        'value6',
        'value7',
        'value8',
        'value9',
        'value10'
    ]
    
}

#// ----------------------------------------------------
sub getColumnsItempoint()
{
    return [ 'itemid', 'rate' ];
}


#// ----------------------------------------------------
sub getColumnsMembers(){
    return [
        'idmembers',
        'name_a',
        'name_b',
        'yomi_a',
        'yomi_b',
        'com',
        'com_yomi',
        'com_post',
        'zip_a',
        'zip_b',
        'tdfken',
        'address1',
        'address2',
        'tel_a',
        'tel_b',
        'tel_c',
        'fax_a',
        'fax_b',
        'fax_c',
        'pass_crypt',
        'pass_salt',
        'now_order',
        'now_order_time',
        'mailaddress',
        'autoLogin',
        'createdate',
        'updatedate',
        'memberstat'
    ];
}

#// ----------------------------------------------------

sub getColumnsPoint()
{
    return [
        'idmembers',
        'point',
        'lastupdate'
    ];
}

#// ----------------------------------------------------
sub getColumnsReminder()
{
    return [
        'idreminder',
        'idmembers',
        'authcode',
        'expire',
        'failure',
        'state'
    ];
}


#// ----------------------------------------------------
sub getColumnsSpecialpoinday
{
    return ['idspecialpoinday',
        'startdate',
        'enddate',
        'rate',
        'priority',
        'target',
        'stat'
    ];
}

#// ----------------------------------------------------
sub getColumnsSpecialpointtargets
{
    return [
        'idspecialpointtargets',
        'idspecialpoinday',
        'itemid'
    ];
}

#// ----------------------------------------------------
sub getColumnsTemp_point
{
    return [
        'idmembers',
        'idorder',
        'orderdate',
        'calc_date',
        'state'
    ];
}

#// ----------------------------------------------------
sub getColumnsOrder_history
{
    return [
         'idorder_history',
        'orderid',
        'idmembers',
        'datas',
        'idorder',
        'getpoint',
        'pointstat',
        'createdate',
        'updatedate',
        'pointchangeflag',
        'addpoint',
        'minuspoint',
        'changepointdate',
        'init_point',
        'init_point_get',
        'init_point_save'
    ];
}

#// ----------------------------------------------------
