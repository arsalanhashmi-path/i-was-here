update public.witness_countries as country
set
  count = coalesce(
    (
      select count(*)
      from public.witness_events as event
      where event.country_code = country.code
    ),
    0
  ),
  updated_at = now();

update public.app_stats
set
  total_count = (select count(*) from public.witness_events),
  updated_at = now()
where id = true;
