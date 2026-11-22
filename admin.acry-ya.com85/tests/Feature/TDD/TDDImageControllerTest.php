<?php

namespace Tests\Feature;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TDDImageControllerTest extends TestCase
{

    public function testExample()
    {
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('GET', '/api/user');
        $response->assertStatus(200);
    }

    public function testSearch()
    {
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('GET', '/api/images/search');
        $response->assertStatus(200);
    }

    public function testSearchOfDir()
    {
        // TODO: アップロードしてから実行する
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('GET', '/api/images/search',[
            'directory' => 'TDD'
        ]);
        $response->assertStatus(200);
    }

    public function testSearchOfDirLike()
    {
        // TODO: アップロードしてから実行する
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('GET', '/api/images/search',[
            'directory' => 'T'
        ]);
        $jsons = $response->json("images");
        foreach ($jsons as $json) {
            $this->assertEquals("TDD", $json['directory']);
        }
        $response->assertStatus(200);
    }

    public function testStore()
    {
        Storage::fake('TDD');
        $file = UploadedFile::fake()->image('TDDTestStore.jpg');

        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('POST', '/api/images/upload', [
            'image' => $file,
            'directory' => 'TDD',
        ]);
        $response->assertStatus(200);
        $json = $response->json();
        $this->assertTrue(array_key_exists('picture_id', $json));

        //
        $this->deleteImage($json['picture_id']);
    }

    public function testStoreNonDir()
    {
        Storage::fake('TDD');
        $file = UploadedFile::fake()->image('TDDTestStoreNonDir.jpg');

        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('POST', '/api/images/upload', [
            'image' => $file,
        ]);
        $response->assertStatus(200);
        $json = $response->json();
        $this->assertTrue(array_key_exists('picture_id', $json));
        $this->deleteImage($json['picture_id']);
    }

    public function testStoreFailed()
    {
        Storage::fake('TDD');
        $file = UploadedFile::fake()->image('TDDTestStoreFailed.jpg');

        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('POST', '/api/images/upload', [
            'image' => $file,
            'directory' => 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        ]);
        $response->assertStatus(200);
        $json = $response->json();
        $this->assertTrue(array_key_exists('error', $json));
        $this->assertTrue(array_key_exists('code', $json['error']));
        $this->assertTrue(array_key_exists('error_message', $json['error']));
    }

    public function testStoreCapacityOver()
    {
        $this->markTestSkipped();
        Storage::fake('TDD');
        $byte = 100 * 1000 * 1000 * 1000;
        $file = UploadedFile::fake()->image('TDDTestStore.jpg')->size($byte);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('POST', '/api/images/upload', [
            'image' => $file,
            'directory' => 'TDD',
        ]);
        $response->assertStatus(200);
        $json = $response->json();
        $this->assertTrue(array_key_exists('error', $json));
        $this->assertTrue(array_key_exists('code', $json['error']));
        $this->assertEquals(507, $json['error']['code']);
        $this->assertTrue(array_key_exists('error_message', $json['error']));
    }

    public function testStoreDuplicate()
    {
        Storage::fake('TDD');
        $file = UploadedFile::fake()->image('TDDTestStoreDuplicate.jpg');
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('POST', '/api/images/upload', [
            'image' => $file,
            'directory' => 'TDD',
        ]);
        $json = $response->json();
        $response->assertStatus(200);
        $picture_id = $json['picture_id'];

        // 同一ディレクトリファイルでアップロード
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('POST', '/api/images/upload', [
            'image' => $file,
            'directory' => 'TDD',
        ]);
        $json = $response->json();
        $response->assertStatus(200);

        $this->assertEquals(303, $json['error']['code']);
        $this->deleteImage($picture_id);
    }


    public function testStoreOverwrite()
    {
        Storage::fake('TDD');
        $file = UploadedFile::fake()->image('TDDTestStoreDuplicate.jpg');
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('POST', '/api/images/upload', [
            'image' => $file,
            'directory' => 'TDD',
        ]);
        $json = $response->json();
        $response->assertStatus(200);
        $picture_id = $json['picture_id'];

        // 同一ディレクトリファイルでアップロード
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('POST', '/api/images/upload', [
            'image' => $file,
            'directory' => 'TDD',
        ]);
        $json = $response->json();
        $response->assertStatus(200);

        $this->assertEquals(303, $json['error']['code']);

        // 上書きする
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('POST', '/api/images/upload', [
            'image' => $file,
            'directory' => 'TDD',
            'is_overwrite' => 1,
        ]);

        $json = $response->json();
        $response->assertStatus(200);

        $this->assertEquals($picture_id, $json['picture_id']);
        $this->assertTrue(array_key_exists('picture_id', $json));

        $this->deleteImage($picture_id);
    }

    public function testStoreOverwriteUnknownResource()
    {
        Storage::fake('TDD');
        $file = UploadedFile::fake()->image('TDDTestStoreDuplicate.jpg');
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('POST', '/api/images/upload', [
            'image' => $file,
            'directory' => 'TDD',
        ]);
        $json = $response->json();
        $response->assertStatus(200);
        $picture_id = $json['picture_id'];

        // 同一ディレクトリファイルでアップロード
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('POST', '/api/images/upload', [
            'image' => $file,
            'directory' => 'TDD',
        ]);
        $json = $response->json();
        $response->assertStatus(200);

        $this->assertEquals(303, $json['error']['code']);

        // 上書きする
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('POST', '/api/images/upload', [
            'image' => $file,
            'directory' => 'TEST',
            'is_overwrite' => 1,
        ]);

        $json = $response->json();
        $response->assertStatus(200);

        $this->assertTrue(array_key_exists('error', $json));
        $this->assertTrue(array_key_exists('code', $json['error']));
        $this->assertTrue(array_key_exists('error_message', $json['error']));
        $this->assertEquals(404, $json['error']['code']);
        $this->deleteImage($picture_id);
    }

    public function testDelete()
    {

        Storage::fake('TDDDelete');
        $file = UploadedFile::fake()->image('TDDTestDelete.jpg');

        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('POST', '/api/images/upload', [
            'image' => $file,
            'directory' => 'TDDDelete',
        ]);

        #print("\n");
        #print $response->json('picture_id');
        #print("\n");
        $picture_id = $response->json('picture_id');

        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('GET', '/api/images/delete', [
            'picture_id' => $picture_id,
        ]);
        $response->assertStatus(200);
        $result = $response->json('result');
        print $result;
        $this->assertTrue($result);
    }

    public function testDeleteUnknownId()
    {
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('GET', '/api/images/delete', [
            'picture_id' => 999999999999,
        ]);
        $response->assertStatus(200);
        $json = $response->json();
        $this->assertTrue(array_key_exists('error', $json));
        $this->assertTrue(array_key_exists('code', $json['error']));
        $this->assertTrue(array_key_exists('error_message', $json['error']));
    }

    public function testDeleteBadRequest()
    {
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('GET', '/api/images/delete');
        $response->assertStatus(200);
        $json = $response->json();
        $this->assertTrue(array_key_exists('error', $json));
        $this->assertTrue(array_key_exists('code', $json['error']));
        $this->assertTrue(array_key_exists('error_message', $json['error']));
    }

    public function testDelete409()
    {
        //テスト後はスキップ状態にしておく
        $this->markTestSkipped();
        $picture_id = 2;
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('GET', '/api/images/delete', [
            'picture_id' => $picture_id,
        ]);
        $response->assertStatus(200);
        $json = $response->json();
        $this->assertTrue(array_key_exists('error', $json));
        $this->assertTrue(array_key_exists('code', $json['error']));
        $this->assertTrue(array_key_exists('error_message', $json['error']));
        var_dump($json);
    }

    public function deleteImage(int $picture_id)
    {
        $response = $this->withHeaders([
            'Authorization' => 'Bearer 1d1314e08dde9e907443226ac363a4c0071e183fe14b29ee23bb235253129136',
        ])->json('GET', '/api/images/delete', [
            'picture_id' => $picture_id,
        ]);
    }
}
