let taxRate = {{ $tax_rate }};
let taxRateValue = (100 + taxRate) / 100;

@if( !empty($delivery_dates) )
let delivery_dates = {
    @foreach($delivery_dates as $key => $value)
            '{{ $key }}' : '{{ $value }}'
        @if(!$loop->last),@endif
    @endforeach
};
@endif
